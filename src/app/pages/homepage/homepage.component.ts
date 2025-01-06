import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { ExportPdfService } from '../../../services/export-pdf.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { LoadingDialogComponent } from '../../components/loading-dialog/loading-dialog.component';

export interface footerItem {
  title: string;
  iconName?: string;
}

export interface card {
  title: string;
  contentList: string[];
  subtitle?: string;
  footerList?: footerItem[];
  imageName?: string; // corresponding to the file name at public assets imgs
  marked?: boolean;
}

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  temposLivresTableSelected = false;
  showPDFModal = false;
  disableButtons = false;

  cardsAssistenciaSaude: card[] = [
    {
      title: 'Cruz Vermelha Portuguesa',
      contentList: [
        'Sistema de alarme para idosos sozinhos.',
        'Ajudas técnicas, apoio alimentar, vestuário.',
        'Consulta de Podologia',
        'Formação 1ºs socorros',
      ],
      imageName: 'hospital.png',
      footerList: [
        {
          iconName: 'house',
          title: 'Rua 25, 883',
        },
        {
          iconName: 'phone',
          title: '96 520 72 93',
        },
      ],
    },
    {
      title: 'Associação de Diabéticos',
      contentList: [
        'Sistema de alarme para idosos sozinhos.',
        'Ajudas técnicas, apoio alimentar, vestuário.',
      ],
      imageName: 'hand-key.png',
      footerList: [
        {
          iconName: 'house',
          title: 'Rua 25, 861',
        },
        {
          iconName: 'phone',
          title: '22 409 99 95',
        },
        {
          iconName: 'public',
          title: 'facebook.com/adespinho',
        },
      ],
    },
    {
      title: 'Associação desenvolvimento concelho de Espinho (ADCE)',
      contentList: ['Banco Alimentar.'],
      imageName: 'vegetables.png',
      footerList: [
        {
          iconName: 'house',
          title: 'Rua Manuel D’Areia, 48, Espinho',
        },
        {
          iconName: 'phone',
          title: '220 973 408',
        },
        {
          iconName: 'mail',
          title: 'adce@adce.pt',
        },
        {
          iconName: 'public',
          title: 'adce.pt',
        },
      ],
    },
    {
      title: 'Ginásio da Mente',
      contentList: [
        'Espaço destinado a qualquer pessoa que queira exercitar a mente.',
        'Prevenção da demência no idoso.',
        'Apoio ao cuidador.',
      ],
      imageName: 'brain-hand.png',
      footerList: [
        {
          iconName: 'house',
          title: 'Rua 25, 883',
        },
        {
          iconName: 'phone',
          title: '96 520 72 93',
        },
      ],
    },
    {
      title: 'Liga dos Amigos ACES Espinho / Gaia',
      subtitle: '(Laces Espinho – Gaia)',
      contentList: [
        'Ajudas técnicas (cadeiras de rodas, camas articuladas, andarilhos, canadianas, cadeirões descanso).',
        'Voluntariado para apoio domiciliário para combater solidão e isolamento social, apoio nas Unidades de Saúde ACES Espinho / Gaia. ',
      ],
      imageName: 'handicap.png',
      footerList: [
        {
          iconName: 'house',
          title: 'Rua 25, 883',
        },
        {
          iconName: 'phone',
          title: '918 239 425 (Mª Helena Leite) | 916 445 369 (Mª José Rebelo)',
        },
        {
          iconName: 'schedule',
          title: 'Segundas e Terças das 16:00 às 18:30h',
        },
        {
          iconName: 'mail',
          title: 'lacesespinho.gaia@gmail.com',
        },
        {
          iconName: 'public',
          title: 'sites.google.com/site/lacesespinhogaia',
        },
      ],
    },
  ];

  cardsApoioCuidador: card[] = [
    {
      title:
        'Projeto EMMIS - Equipa móvel Multidisciplinar da Intervenção Sénior',
      contentList: ['Apoio técnico gratuito séniores e cuidadores informais.'],
      imageName: 'hospital.png',
      footerList: [
        {
          iconName: 'phone',
          title: '22 731 990 61',
        },
        {
          iconName: 'mail',
          title: 'emmis@cerciespinho.org.pt',
        },
      ],
    },
  ];

  cardsAtividadesTemposLivres: card[] = [
    {
      title: 'MyMoyo',
      contentList: [
        'Trabalho de Costura voluntário para famílias carenciadas em países de desenvolvimento.',
      ],
      footerList: [
        {
          iconName: 'house',
          title: 'Piscina Solário Atlântico',
        },
        {
          iconName: 'schedule',
          title: 'Segundas e Quartas Feiras 14h00 – 18h00',
        },
      ],
    },
    {
      title: 'Ginásio da Mente',
      contentList: [
        'Yoga – terça feira 10:30 – 11:30.',
        'Atividades todos os dias para idosos.',
      ],
      imageName: 'brain-hand.png',
      footerList: [
        {
          iconName: 'house',
          title: 'Rua 18, 1067',
        },
        {
          iconName: 'phone',
          title: '91 113 34 04',
        },
        {
          iconName: 'schedule',
          title: 'Terça feira – 10:30 – 11:30',
        },
      ],
    },
    {
      title: 'Associação desenvolvimento concelho de Espinho (ADCE)',
      contentList: [
        'Centro comunitário – Acompanhamento psicossocial, animação sociocultura, promoção de competências em adultos.',
      ],
      footerList: [
        {
          iconName: 'house',
          title: 'Rua Manuel D’Areia, 48, Espinho',
        },
        {
          iconName: 'phone',
          title: '220 973 408',
        },
        {
          iconName: 'mail',
          title: 'adce@adce.pt',
        },
        {
          iconName: 'public',
          title: 'adce.pt',
        },
      ],
    },
    {
      title: 'Espinho Ação Social',
      contentList: ['Baile sénior.'],
      imageName: 'dancers.png',
      footerList: [
        {
          iconName: 'house',
          title: 'Piscina Solário Atlântico',
        },
        {
          iconName: 'schedule',
          title: 'Quarto domingo de cada mês',
        },
      ],
    },
    {
      title: 'Tricotar Histórias',
      contentList: ['Trabalho de costura.'],
      imageName: 'tricot.png',
      footerList: [
        {
          iconName: 'house',
          title: 'Biblioteca de Espinho',
        },
        {
          iconName: 'phone',
          title: '227 335 869',
        },
        {
          iconName: 'schedule',
          title: 'Quinzenalmente as terças (15:00h)',
        },
      ],
    },
    {
      title: 'Centro Qualifica CEPROF',
      contentList: [
        'Aulas para melhoria da qualificação escolar.',
        'Cidadania, matemática, língua portuguesa, competências digitais e língua estrangeira (inglês).',
      ],
      footerList: [
        {
          iconName: 'house',
          title: 'Rua 30, 611',
        },
        {
          iconName: 'phone',
          title: '221 450 135',
        },
        {
          iconName: 'schedule',
          title: '1h30 – 2h00 por semana; 4ªF tarde, 6ªF manhã',
        },
      ],
    },
    {
      title: 'Espinho a Mar e Cantar',
      contentList: ['Coro.', 'Musicoterapia.'],
      imageName: 'singers.png',
      footerList: [
        {
          iconName: 'house',
          title: 'Rua 25, 861',
        },
        {
          iconName: 'phone',
          title: '934 907 001',
        },
      ],
    },
    {
      title: 'Liga dos Amigos ACES Espinho / Gaia',
      subtitle: '(Laces Espinho – Gaia)',
      contentList: [
        'Voluntariado para apoio domiciliário para combater solidão e isolamento social, apoio nas Unidades de Saúde ACES Espinho / Gaia. ',
      ],
      imageName: 'handicap.png',
      footerList: [
        {
          iconName: 'house',
          title: 'Rua 25, 883',
        },
        {
          iconName: 'phone',
          title: '918 239 425 (Mª Helena Leite) | 916 445 369 (Mª José Rebelo)',
        },
        {
          iconName: 'schedule',
          title: 'Segundas e Terças das 16:00 às 18:30h',
        },
        {
          iconName: 'mail',
          title: 'lacesespinho.gaia@gmail.com',
        },
        {
          iconName: 'public',
          title: 'sites.google.com/site/lacesespinhogaia',
        },
      ],
    },
  ];

  constructor(
    private exportPDFservice: ExportPdfService,
    private dialog: Dialog
  ) {}

  markCardAssistenciaSaude(iCard: number) {
    this.cardsAssistenciaSaude[iCard].marked =
      !this.cardsAssistenciaSaude[iCard]?.marked;
  }

  markCardApoioCuidador(iCard: number) {
    this.cardsApoioCuidador[iCard].marked =
      !this.cardsApoioCuidador[iCard]?.marked;
  }

  markCardAtividadeTemposLivres(iCard: number) {
    this.cardsAtividadesTemposLivres[iCard].marked =
      !this.cardsAtividadesTemposLivres[iCard]?.marked;
  }

  markCardTemposLivresTable() {
    this.temposLivresTableSelected = !this.temposLivresTableSelected;
  }

  switchShowPDFModal(mode: string) {
    this.showPDFModal = !this.showPDFModal;

    if (this.showPDFModal && mode !== 'close') {
      setTimeout(() => {
        this.exportPDF(mode);
      }, 100);
    }
  }

  exportPDF(mode: string) {
    let loading = this.dialog.open(LoadingDialogComponent);

    this.disableButtons = true;

    this.exportPDFservice
      .exportAsPDF(
        true,
        'landscape',
        '',
        ['pdf-page2', 'pdf-page1'],
        'cartaz',
        false,
        mode === 'print' ? true : false
      )
      .then(() => {
        loading.close();
        this.disableButtons = false;
      })
      .catch(() => {
        loading.close();
        this.disableButtons = false;
      });
  }

  selectDeselectAll(newState: boolean) {
    this.cardsApoioCuidador = this.cardsApoioCuidador.map((item) => {
      return {
        ...item,
        ...{
          marked: newState,
        },
      };
    });
    this.cardsAssistenciaSaude = this.cardsAssistenciaSaude.map((item) => {
      return {
        ...item,
        ...{
          marked: newState,
        },
      };
    });
    this.cardsAtividadesTemposLivres = this.cardsAtividadesTemposLivres.map(
      (item) => {
        return {
          ...item,
          ...{
            marked: newState,
          },
        };
      }
    );
    this.temposLivresTableSelected = newState;
  }
}
