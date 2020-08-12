import {Component, HostListener, OnInit} from '@angular/core';
import {ExecuteCommandService} from "../../services/execute-command.service";
import {ManagerService} from "../../services/manager.service";
import {Fetch} from "../../classes/fetch";
import {Router} from "@angular/router";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public options: string[] = ["look", "check chest", "check door", "check mirror", "check painting", "use door key",
    "use chest key",
    "playerstatus",
    "forward",
    "backward",
    "left",
    "right",
    "trade",
    "finish trade",
    "use flashlight",
    "switch lights",
    'buy',
    "sell"
  ];

  selectedQuantity = "look";
  result: string
  fetch = new Fetch()
  users: String[]
  show = false;
  tie = false;
  fightResult: string
  showItems: boolean
  pick = false;
  flag = true;
  public items: string[] = ["flashlight", "doorkey", "winningdoorkey", "chestkey"
  ];
  public fightOptions: string[] = ["rock", "paper", "scissor"
  ];
  extraParam: string;
  chosen: string

  constructor(private executeCommandService: ExecuteCommandService, private managerService: ManagerService, private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('Logged') != 'true') {
      this.router.navigate(['/login']);
    } else {
      this.fetchUsers()

    }
  }

  execute() {
    if (this.selectedQuantity == 'buy' || this.selectedQuantity == 'sell') {
      this.selectedQuantity = this.selectedQuantity + " " + this.extraParam;
      console.log(this.selectedQuantity);
    }
    this.executeCommandService.execute(this.selectedQuantity).toPromise()
      .then((res) => this.result = res.message)
      .catch((err) => console.log(err));

  }

  fetchUsers() {

    (this.managerService.fetch().toPromise()
      .then((res) => this.fetch = res)
      .catch((err) => console.log(err)))
    this.users = this.fetch.activeUsers
    if (this.users != null) {
      if (this.users.length > 1 && this.flag) {
        this.result = "you have 30 min to win"
        this.flag = false
      }
    }
    if (this.result == 'finished') {
      this.router.navigate(['winning'])
    } else {
      this.managerService.checkIfLost(this.fetch)
    }
    if (this.tie != this.fetch.tie) {
      this.tie = this.fetch.tie;

    }
    setTimeout(() => {

        this.fetchUsers()
      }, 1000
    );
  }

  @HostListener('window:beforeunload', ['$event'])
  public async beforeunloadHandler(event) {
    await this.executeCommandService.quit("quit");
    console.log('quit')
  }


  async picked() {
    this.result = "waiting for the other player to pick";
    this.pick = true;
    (await this.managerService.fight(this.chosen).toPromise()
      .then((res) => this.fightResult = res.message)
      .catch((err) => console.log(err)))
    this.checkResult()
    console.log('done')

  }

  checkResult() {
    console.log(this.fightResult)
    if (this.fightResult == 'badChoice') {
      this.fetch.lost = true
      this.executeCommandService.quit('quit')
      localStorage.clear();
      this.router.navigate(['lost'])
    } else if (this.fightResult == 'won') {
      this.result = 'you won the fight and obtained new items and gold'
      this.fightResult = ''
      this.tie = false;
    } else if (this.fightResult == 'tie') {
      this.result = 'there was a tie please pick again'
      this.pick = false;
    }
  }

  backward() {
    this.selectedQuantity = 'backward'
    this.execute();
  }

  forward() {
    this.selectedQuantity = 'forward'
    this.execute();
  }

  left() {
    this.selectedQuantity = 'left'
    this.execute();
  }

  right() {
    this.selectedQuantity = 'right'
    this.execute();
  }

  look() {
    this.selectedQuantity = 'look'
    this.execute();
  }

  status() {
    this.selectedQuantity = 'playerstatus'
    this.execute();
  }

  checkDoor() {
    this.selectedQuantity = 'check door'
    this.execute();
  }

  useDoorKey() {
    this.selectedQuantity = 'use door key'
    this.execute();
  }

  checkChest() {
    this.selectedQuantity = 'check chest'
    this.execute();
  }

  useChestKey() {
    this.selectedQuantity = 'use chest key'
    this.execute();
  }


  checkMirror() {
    this.selectedQuantity = 'check mirror'
    this.execute();
  }

  checkPainting() {
    this.selectedQuantity = 'check painting'
    this.execute();
  }

  trade() {
    this.selectedQuantity = 'trade'
    this.showItems = true
    this.execute();
  }

  buy() {
    this.selectedQuantity = 'buy'
    this.execute();
  }

  sell() {
    this.selectedQuantity = 'sell'
    this.execute();
  }

  finishTrade() {
    this.selectedQuantity = "finish trade"
    this.showItems = false;
    this.execute();
  }

  useFlashlight() {
    this.selectedQuantity = 'use flashlight'
    this.execute();
  }

  switchLights() {
    this.selectedQuantity = 'switch lights'
    this.execute();
  }

  help() {
    this.selectedQuantity = 'help'
    this.execute();
  }

  list() {
    this.selectedQuantity = 'list'
    this.execute()
  }
}
