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

  constructor(private jouralSerice: JournalService) { }

  ngOnInit() {
    this.jouralSerice.getJouranls().then((journals: Journal[]) => {
      this.journals = journals.map((journal) => {
        if (!journal.title) {
          journal.title = ''
        }
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

  createNewJournal() {
    var journal: Journal = {
      title: '',
      date: new Date(),
      description: ''
    };

    // By default, a newly-created journal will have the selected state.
    this.selectJournal(journal);
  }
}
