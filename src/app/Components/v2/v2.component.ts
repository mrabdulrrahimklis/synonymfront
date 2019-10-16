import {
  Component,
  ElementRef,
  Renderer2,
  AfterViewInit,
  ViewChild,
  OnInit
} from "@angular/core";
import { SynonymModel } from "../../Models/synonym-model";
import * as fromStore from "../../Store";
import { words } from "../../Data/data";

@Component({
  selector: "app-v2",
  templateUrl: "./v2.component.html",
  styleUrls: ["./v2.component.scss"]
})
export class V2Component implements OnInit {
  title = "Synonyms";
  open = false;
  second = false;
  newWordNumber: number;
  searchText;
  inputName;
  inputArrays;
  inputWords;
  words: SynonymModel[] = words;

  reducers = {
    synonyms: fromStore.reducer
  };

  store = new fromStore.Store(this.reducers);

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  addNewWord(index) {
    this.second = true;
    this.newWordNumber = index;
  }

  submitNewWord() {
    const arrayOfWord = {
      name: this.newWordNumber,
      payload: this.inputWords.split(",")
    };
    this.store.dispatch(new fromStore.AddWord(arrayOfWord));
    this.inputWords = "";
    this.second = false;
  }

  addNewCollection() {
    this.open = true;
  }

  submitNewCollection() {
    const array = this.inputArrays.split(",");
    const payload = { name: this.inputName, payload: array };
    this.store.dispatch(new fromStore.AddSynonym(payload));
    this.store.subscribe(state => console.log("STATE:::", state));
    this.open = false;
    this.inputName = "";
    this.inputArrays = "";
  }
}
