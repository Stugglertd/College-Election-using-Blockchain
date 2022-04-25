from django.contrib import admin
from django.urls import path
from api import views
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('stuinfo/<int:pk>', views.student_detail),
    path('stulist/', views.student_list),
    path('',TemplateView.as_view(template_name='index.html')),
]
