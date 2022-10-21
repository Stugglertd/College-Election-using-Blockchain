from django.contrib import admin
from django.urls import path
from api import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('stuinfo/<str:pk>', views.student_detail),
    path('stulist/', views.student_list),
]
