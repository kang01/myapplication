import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { BizState } from './bizs.routing';
import { QuestionAccreditComponent } from './question/template/question-accredit/question-accredit.component';
import { QuestionDetailComponent } from './question/template/question-detail/question-detail.component';
import { QuestionAnswerComponent } from './question/template/question-answer/question-answer.component';
@NgModule({
  imports: [
    RouterModule.forChild(BizState),
    CommonModule
  ],
  declarations: [QuestionComponent, QuestionAccreditComponent, QuestionDetailComponent, QuestionAnswerComponent]
})
export class MyapplicationBizsModule { }
