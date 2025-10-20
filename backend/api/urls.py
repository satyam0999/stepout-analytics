from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('players/<int:player_id>/report/', views.player_report_view, name='player_report'),
]
