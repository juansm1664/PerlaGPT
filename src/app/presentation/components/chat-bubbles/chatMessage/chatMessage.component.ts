import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [],
  templateUrl: './chatMessage.component.html',
  styleUrl: './chatMessage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageComponent {
  // indica que el componente padre debe proporcionar un valor para esta propiedad
  @Input({ required: true }) text!: string;
}
