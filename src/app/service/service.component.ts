import { Component, OnInit } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons';
import { faMarker } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  faCode = faCode;
  faFirefoxBrowser = faFirefoxBrowser;
  faMarker = faMarker;

  constructor() { }
  ngOnInit(): void { }
}
export class AppModule { 
  faCode = faCode;
  faFirefoxBrowser = faFirefoxBrowser;
  faMarker = faMarker;
}