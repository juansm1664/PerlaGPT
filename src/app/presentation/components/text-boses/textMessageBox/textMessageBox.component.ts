import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-text-message-box',
  imports: [],
  templateUrl: './textMessageBox.component.html',
  styleUrl: './textMessageBox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxComponent { }
