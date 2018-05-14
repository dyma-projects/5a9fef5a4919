import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

    titre:string= 'projet 2';
    type:string= 'text';
    danger:string= ' ';
    dangerousStyles;
    alarm:boolean = false;
    status:boolean = true;

    public texts: Array<String> = ['un', 'deux', 'trois'];

    setDangerousStyles() {
        this.dangerousStyles = {
          'background-color': this.alarm      ? 'red' : 'green',
          'margin': this.alarm      ? '300px 250px 250px 250px' : '300px 250px 250px 250px',
          'padding': this.alarm      ? '10px 10px 10px 10px' : '44px 10px 10px 10px',
          'border-style': 'dashed solid',
          'text-align':'center';        
        };
      }
 
   zoneDanger(event: Event) :void{
        if(this.alarm){
            alert(this.danger);
        }
    }

   changeStatus(event: Event) :void{
        this.status= !this.status;
    }

   enableAlarm(event: Event) :void{
        this.alarm= true;
        this.danger= 'zone dangereuse';
        this.setDangerousStyles();
    }

   disabledAlarm(event: Event) :void{
        this.alarm= false;
        this.danger= '';
        this.setDangerousStyles();
    }
   
    ngOnInit() {
        this.alarm= false;
        this.setDangerousStyles();
    }
}
