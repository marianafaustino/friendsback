// src/observers/solicitacao-notification.observer.ts
import { Injectable } from '@nestjs/common';
import { SolicitacaoCreatedEvent } from '../events/solicitacao-created.event';
import { UsuariosService } from '../usuarios/adapter/usuarios.service';

@Injectable()
export class SolicitacaoNotificationObserver {
  constructor(private readonly usuariosService: UsuariosService) {}

  async handle(solicitacaoCreatedEvent: SolicitacaoCreatedEvent) {
    const usuarios = await this.usuariosService.findAll();

    // Usando os dados da solicitação recebida
    const solicitacaoId = solicitacaoCreatedEvent.solicitacao.id;
    const titulo = solicitacaoCreatedEvent.solicitacao.titulo;
    const solicitanteNome = solicitacaoCreatedEvent.solicitacao.solicitante.nome; // Acessando o nome do usuário

    // Notificando os usuários
    usuarios.forEach(usuario => {
      console.log(`Notificando usuário ${usuario.nome} sobre a nova solicitação "${titulo}" com ID ${solicitacaoId} feita por ${solicitanteNome}`);
      // Aqui você pode implementar a lógica para enviar notificações (e-mail, push notification, etc.)
    });
  }
}