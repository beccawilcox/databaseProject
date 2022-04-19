from django.db import models


class Question(models.Model):
    question_text = models.CharField(max_length=50)
    pub_date = models.DateTimeField('name of attendee')
    
    def __str__(self):
        return self.question_text


    
