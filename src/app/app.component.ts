import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card';

  //creating a variable called user and making it of any type...
  user: any;

  //calling the services.
  constructor(private userService: UserService,private toastr: ToastrService){}

  ngOnInit() {
      this.userService.getUser().subscribe(
        //if sucess, we get a user.
        (user:any)=>{
          console.log(user);
          //we actually first get an object(user) and the first element is the big json.
          //based on the json formatter of the url/api tree format in website.
          this.user=user.results[0];
        },
        (err)=>{
            this.toastr.error(err.status,"Oops...")
        }
      )
  }

  reload(){
    window.location.reload();
  }
}
