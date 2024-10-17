import { Injectable } from '@nestjs/common';
import { SolicitacaoCreatedEvent } from '../events/solicitacao-created.event';
import { UsuariosService } from 'src/usuarios/adapter/usuarios.service';

@Injectable()
export class SolicitacaoNotificationObserver {
  constructor(
    private readonly usuariosService: UsuariosService,) {}

  async handle(solicitacaoCreatedEvent: SolicitacaoCreatedEvent) {
    const usuarios = await this.usuariosService.findAll();
    
    usuarios.forEach(usuario => {
      console.log(`Notificando usuário ${usuario.nome} sobre a nova solicitação com ID ${solicitacaoCreatedEvent.solicitacaoId}`);
      // Enviar notificação (por exemplo, via e-mail, push notification, etc.)
    });
  }
}