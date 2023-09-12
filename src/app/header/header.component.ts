import { Component } from '@angular/core';
import  {HeaderService} from '../service/header.service'
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  name : string = "Hector Emmanuel Mayahua Reyes";
  vision : string = "Aprender a programar ";
  contacto1 : string = "hmayahua23@gmail.com";
  contacto2 : string = "272- 122 86 71";
  contacto3 : string="Usuario de gitHub:Hector21s";
  direccion : string="Ixhuatlancillo";
  titulos : string = "fake titulo";
  foto : string = "fake foto";

  ngOnInit(): void {
    this.headerService.getHeader()
    .subscribe((data: any) => {
      console.log(data);
      alert(data)
    });
  }
            
}
