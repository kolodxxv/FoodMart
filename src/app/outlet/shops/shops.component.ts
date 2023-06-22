import { Component } from '@angular/core';

@Component({
  selector: 'app-shops-component',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent {

  public shopsArray: any[] = [
    {id: 1, label: 'ZooFarm', shopTypeShortLabel: 'zo', shopTypeId: '10', 
  img: 'https://straus.s3.amazonaws.com/media/CACHE/images/providers/4c8a647ecfef4c5c929fdcc6de9ae12c/eb34d9cbac917e78f46116a494161492.jpg' },
    {id: 2, label: 'OkFlora', shopTypeShortLabel: 'fl', shopTypeId: '40',
  img: 'https://straus.s3.amazonaws.com/media/CACHE/images/providers/bf1f198c232f4ee4845544b135d5c632/6810138b3ceccc79fdad2bc50bc67e02.jpg'},
    {id: 3, label: "Istanbul Bazaar", shopTypeShortLabel: 'fd', shopTypeId: '50',
  img: 'https://straus.s3.amazonaws.com/media/CACHE/images/providers/2a87cf480ba24446b1efb4446cde9f0f/42774c252c924fb0e7dc00f6687af195.jpg'},
  
  ]

}
