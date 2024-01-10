import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  @ViewChild('pdfDownload') pdfDownloadRef!: ElementRef;

  downloadCV(): void {
    const pdfLink = this.pdfDownloadRef.nativeElement;
    pdfLink.click();
  }

}
