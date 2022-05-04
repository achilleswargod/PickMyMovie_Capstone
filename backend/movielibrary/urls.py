from django.urls import path
from . import views



urlpatterns = [
	path('<str:video_id>/', views.get_video_comments),
	path('', views.add_comment),
	path('<int:pk>/update/', views.update_comment)
]