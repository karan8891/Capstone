from django.urls import include, path
from rest_framework import routers
from scrapebook.api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
    # for user authentication
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]