from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # defining api routing urls
    url(r'^api/', include('scrapebook.api.urls'))
]