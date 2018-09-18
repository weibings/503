import { Component, OnInit, Injector } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';
//import { PROBLEMS } from '../../mock-problems'
@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css'],
  providers: [DataService]
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  constructor(private data : DataService) { }

  ngOnInit() {
    //this.problems = PROBLEMS;
    this.getProblems();
  }

  getProblems() : void {
    this.problems = this.data.getProblems();
  }
}
