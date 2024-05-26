from django.urls import path
from . import views
app_name = 'mainApp'

urlpatterns = [
    path("", views.display_index, name='index'),
    path("about/", views.display_about, name='about'),
]
