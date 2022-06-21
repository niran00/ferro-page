import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  @ViewChild('toggle') toggle: any;
  @ViewChild('menutab') menutab: any;
  @ViewChild('heading') heading: any;
  @ViewChild('hoverMenu') hoverMenu: any;
  @ViewChild('showcase') showcase: any;
  @ViewChild('playbtn') playbtn: any;
  menuToggle: any;



  ngOnInit(): void {


    $(".toggle").hover(
      () => { //hover
        $(".main-menu").addClass("d-none");
      },
      () => { //out
        $(".main-menu").removeClass("d-block");
      }
    );

    $(document).ready(function () {
      $(".list1").hover(function () {
        $('.main-menu').css("background-image", "url('https://source.unsplash.com/random/?education')");
      }, function () {
        $('.main-menu').css("background-image", "");
      });

      $(".list2").hover(function () {
        $('.main-menu').css("background-image", "url('https://source.unsplash.com/random/?cars')");
      }, function () {
        $('.main-menu').css("background-image", "");
      });

      $(".list3").hover(function () {
        $('.main-menu').css("background-image", "url('https://source.unsplash.com/random/?water')");
      }, function () {
        $('.main-menu').css("background-image", "");
      });

      $(".list4").hover(function () {
        $('.main-menu').css("background-image", "url('https://source.unsplash.com/random/?business')");
      }, function () {
        $('.main-menu').css("background-image", "");
      });

      $(".list5").hover(function () {
        $('.main-menu').css("background-image", "url('https://source.unsplash.com/random/?books')");
      }, function () {
        $('.main-menu').css("background-image", "");
      });

      $(".list6").hover(function () {
        $('.main-menu').css("background-image", "url('https://source.unsplash.com/random/?development')");
      }, function () {
        $('.main-menu').css("background-image", "");
      });

    });

  }

  openNav() {
    this.toggle.nativeElement.classList.toggle('active');
    this.menutab.nativeElement.classList.toggle('activeNav');
    this.heading.nativeElement.classList.toggle('d-none');
    this.hoverMenu.nativeElement.classList.toggle('d-lg-none');
    this.showcase.nativeElement.classList.toggle('showHeight')
    this.playbtn.nativeElement.classList.toggle('d-none');
  }

}
