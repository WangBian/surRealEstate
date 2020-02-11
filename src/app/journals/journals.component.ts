import { JournalService } from './journal.service';
import { Component, OnInit } from '@angular/core';
import { Journal } from './journal.model';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {

  journals: Journal[];
  selectedJournal: Journal;

  @Input()
  createHandler: Function;

  constructor(private jouralService: JournalService) { }

  ngOnInit() {
    this.jouralService.getJouranls().then((journals: Journal[]) => {
      this.journals = journals.map((journal) => {
        if (!journal.title) {
          journal.title = '';
        }
        //journal.createDate = new Date(journal.createDate.toDateString());
        return journal;
      });
    });
  }

  private getIndexOfJournal = (journalId: String) => {
    return this.journals.findIndex((journal) => {
      return journal._id === journalId;
    });
  }

  selectJournal(journal: Journal) {
    this.selectedJournal = journal;
  }

  createNewJournal(journal: Journal) {
    this.jouralService.createJournal(journal).then((newJournal: Journal) => {
      this.createHandler(newJournal);
    });

    // By default, a newly-created journal will have the selected state.
    this.selectJournal(journal);
  }
}
