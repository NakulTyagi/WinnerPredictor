import { Component, OnInit } from "@angular/core";
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document) {}

  ngOnInit() {
    document.getElementById("win").style.display = "none";
    document.getElementById("semi").style.display = "none";
    document.getElementById("final").style.display = "none";
  }

  a1name: string = "India";
  a2name: string = "Australia";
  a3name: string = "Westindies";
  a4name: string = "Srilanka";
  b1name: string = "England";
  b2name: string = "NewZealand";
  b3name: string = "Pakistan";
  b4name: string = "SouthAfrica";
  s1name: string = "Null";
  s2name: string = "Null";
  s3name: string = "Null";
  s4name: string = "Null";
  f1name: string = "Null";
  f2name: string = "Null";
  winner: string = "Null";

  b1() {
    document.getElementById("b1").style.backgroundColor = "gray";
    if (this.s3name == "Null") {
      this.s3name = this.b1name;
    } else {
      this.s4name = this.b1name;
      document.getElementById("semi").style.display = "block";
    }
  }
  b2() {
    document.getElementById("b2").style.backgroundColor = "gray";
    if (this.s3name == "Null") {
      this.s3name = this.b2name;
    } else {
      this.s4name = this.b2name;
      document.getElementById("semi").style.display = "block";
    }
  }
  b3() {
    document.getElementById("b3").style.backgroundColor = "gray";
    if (this.s3name == "Null") {
      this.s3name = this.b3name;
    } else {
      this.s4name = this.b3name;
      document.getElementById("semi").style.display = "block";
    }
  }
  b4() {
    document.getElementById("b4").style.backgroundColor = "gray";
    if (this.s3name == "Null") {
      this.s3name = this.b4name;
    } else {
      this.s4name = this.b4name;
      document.getElementById("semi").style.display = "block";
    }
  }
  a1() {
    document.getElementById("a1").style.backgroundColor = "gray";
    if (this.s1name == "Null") {
      this.s1name = this.a1name;
    } else {
      this.s2name = this.a1name;
    }
  }
  a2() {
    document.getElementById("a2").style.backgroundColor = "gray";
    if (this.s1name == "Null") {
      this.s1name = this.a2name;
    } else {
      this.s2name = this.a2name;
    }
  }
  a3() {
    document.getElementById("a3").style.backgroundColor = "gray";
    if (this.s1name == "Null") {
      this.s1name = this.a3name;
    } else {
      this.s2name = this.a3name;
    }
  }
  a4() {
    document.getElementById("a4").style.backgroundColor = "gray";
    if (this.s1name == "Null") {
      this.s1name = this.a4name;
    } else {
      this.s2name = this.a4name;
    }
  }
  s1() {
    document.getElementById("s1").style.backgroundColor = "gray";
    if (this.f1name == "Null") {
      this.f1name = this.s1name;
    } else {
      this.f2name = this.s1name;
    }
  }
  s2() {
    document.getElementById("s2").style.backgroundColor = "gray";
    if (this.f1name == "Null") {
      this.f1name = this.s2name;
    } else {
      this.f2name = this.s2name;
      document.getElementById("final").style.display = "block";
    }
  }
  s3() {
    document.getElementById("s1").style.backgroundColor = "gray";
    if (this.f1name == "Null") {
      this.f1name = this.s3name;
    } else {
      this.f2name = this.s3name;
    }
  }
  s4() {
    document.getElementById("s2").style.backgroundColor = "gray";
    if (this.f1name == "Null") {
      this.f1name = this.s4name;
    } else {
      this.f2name = this.s4name;
      document.getElementById("final").style.display = "block";
    }
  }
  f1() {
    document.getElementById("f1").style.backgroundColor = "gray";
    if (this.winner == "Null") {
      this.winner = this.f1name;
      document.getElementById("win").style.display = "block";
    }
  }
  f2() {
    document.getElementById("f1").style.backgroundColor = "gray";
    if (this.winner == "Null") {
      this.winner = this.f2name;
      document.getElementById("win").style.display = "block";
    }
  }
}
