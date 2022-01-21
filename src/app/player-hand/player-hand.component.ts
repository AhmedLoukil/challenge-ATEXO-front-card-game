import { Component } from '@angular/core';
import { CardsService } from '../cards.service';
import { Card, Color, Value } from '../card';

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.css']
})
export class PlayerHandComponent {

  cards: Card[] = [];

  constructor(
      private cardsService: CardsService
  ) { }

  distributes() {
    this.cardsService.distributes()
      .subscribe(receivedCards => {
                  this.cards = receivedCards;
                 });
  }

  orderByValue() {
    this.cardsService.orderByValue()
      .subscribe(receivedCards => {
                  this.cards = receivedCards;
                 });
  }

  orderByColor() {
    this.cardsService.orderByColor()
      .subscribe(receivedCards => {
                  this.cards = receivedCards;
                 });
  }

  clearHand() {
    this.cardsService.clearHand()
      .subscribe(() => {
                   this.cards = [];
                 });
  }
}
