import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from './usr-info.model';

@Component({
  selector: 'dn-usr-info',
  templateUrl: './usr-info.component.html',
  styleUrls: ['./usr-info.component.css']
})
export class UsrInfoComponent implements OnInit {
  myInfo: UserInfo | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Sending request to server!");
    this.showUserInfo();
  }

  getUserInfo() {
    return this.http.get<UserInfo>('https://dead-net-app-default-rtdb.firebaseio.com/myinfo.json');
  }

  showUserInfo() {
    this.getUserInfo().subscribe((data: UserInfo) => {
      console.log(data);
      this.myInfo = data;
    })
  }
}
