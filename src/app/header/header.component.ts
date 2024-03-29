import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username: string | null = null;
image='';
  constructor() { }

  ngOnInit(): void {
    const userDataString = sessionStorage.getItem('loggedinUser');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      this.image= userData.picture 
      this.username = userData.name; // Extract the name property
    }
  }
}
