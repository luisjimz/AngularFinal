import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'final-course-content-component',
    template: `
  <div class="jumbotron">
  <h1 class="display-4">{{HEADING}}</h1>
  <p class="lead">The following topics where treated in this project:</p>
  <ol>
    <li *ngFor="let item of CONTENT"> {{item.topic | titlecase}}
      <ol>
        <li *ngFor="let subItem of item['subtopic']">{{subItem | titlecase}}</li>
      </ol>
    </li>
  </ol>
  <hr class="my-4">
</div>
  `
})
export class CourseContentComponent implements OnInit {

    HEADING: string;
    CONTENT: any[];

    ngOnInit() {
        this.HEADING = "Client CRUD"
        this.CONTENT = [{
            topic: 'components',
        },
        {
            topic: 'modules',
            subtopic: [
                'exporting components through modules'
            ]
        },
        {
            topic: 'routing',
            subtopic: [
                'router link'
            ]
        },
        {
            topic: 'services',
            subtopic: [
                'data managment',
                'data through different contexts',
                'class reuse'
            ]
        },
        {
            topic: 'reactive forms',
            subtopic: [
                'form groups',
                'form control',
                'form builder',
                'nested forms'
            ]
        },
        {
            topic: 'directives',
            subtopic: [
                'structural directives'
            ]
        }]
    }

}