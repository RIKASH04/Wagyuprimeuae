"""Backend API tests for WagyuPrimeUAE."""
import os
import uuid
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL') or 'https://luxury-beef.preview.emergentagent.com'
BASE_URL = BASE_URL.rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ===== Root =====
class TestRoot:
    def test_root_ok(self, session):
        r = session.get(f"{API}/", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert "WagyuPrimeUAE" in data.get("message", "")
        assert data.get("status") == "ok"


# ===== Contact =====
class TestContact:
    def test_create_contact_and_persist(self, session):
        payload = {
            "name": "TEST_Rikash",
            "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
            "subject": "TEST_Inquiry",
            "message": "I am interested in A5 ribeye."
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["subject"] == payload["subject"]
        assert data["message"] == payload["message"]
        assert "id" in data and len(data["id"]) > 0
        assert "created_at" in data

        # Verify GET list contains it
        r2 = session.get(f"{API}/contact", timeout=15)
        assert r2.status_code == 200
        items = r2.json()
        assert isinstance(items, list)
        assert any(x["id"] == data["id"] for x in items)
        # Ensure no _id leakage
        for x in items[:5]:
            assert "_id" not in x

    def test_create_contact_without_subject(self, session):
        payload = {
            "name": "TEST_NoSubject",
            "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
            "message": "Subject is optional"
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["subject"] in (None, "")

    def test_contact_invalid_email_422(self, session):
        r = session.post(f"{API}/contact", json={
            "name": "TEST",
            "email": "not-an-email",
            "message": "bad"
        }, timeout=15)
        assert r.status_code == 422

    def test_contact_missing_fields_422(self, session):
        r = session.post(f"{API}/contact", json={"email": "x@x.com"}, timeout=15)
        assert r.status_code == 422


# ===== Newsletter =====
class TestNewsletter:
    def test_subscribe_and_idempotent(self, session):
        email = f"test_nl_{uuid.uuid4().hex[:8]}@example.com"
        r1 = session.post(f"{API}/newsletter", json={"email": email}, timeout=15)
        assert r1.status_code == 200, r1.text
        d1 = r1.json()
        assert d1["email"] == email
        assert "id" in d1

        # Same email again -> same record (idempotent)
        r2 = session.post(f"{API}/newsletter", json={"email": email}, timeout=15)
        assert r2.status_code == 200
        d2 = r2.json()
        assert d2["id"] == d1["id"]
        assert d2["email"] == email

        # GET list contains it
        r3 = session.get(f"{API}/newsletter", timeout=15)
        assert r3.status_code == 200
        items = r3.json()
        assert any(x["email"] == email for x in items)
        # No _id leak
        for x in items[:5]:
            assert "_id" not in x

    def test_newsletter_invalid_email_422(self, session):
        r = session.post(f"{API}/newsletter", json={"email": "bad"}, timeout=15)
        assert r.status_code == 422

    def test_newsletter_missing_email_422(self, session):
        r = session.post(f"{API}/newsletter", json={}, timeout=15)
        assert r.status_code == 422
