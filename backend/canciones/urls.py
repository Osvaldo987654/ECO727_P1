from rest_framework import routers
from .views import CancionViewSet

router = routers.DefaultRouter()
router.register(r'canciones', CancionViewSet)

urlpatterns = router.urls
