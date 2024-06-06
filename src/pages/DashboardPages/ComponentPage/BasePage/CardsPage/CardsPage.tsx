import { CardContent, CustomCard } from '@/components';
import { Stack } from '@mui/material';
import { cardAlignment, cardVariants, cardsActions, simpleCards } from './CardsPage.constants';
import { AlignmentType, PaletteVariants, TextAlignType } from '@/types/interfaces';

export function CardsPage() {
  return (
    <>
      <CustomCard header="card.card_example">
        <Stack p={1} flexWrap={'wrap'} gap={2} direction={'row'}>
          {simpleCards.map((card) => (
            <CardContent
              key={card.id}
              title={card.title}
              content={
                <Stack width={{ xs: undefined, md: 400 }}>
                  <CustomCard
                    header={card.header}
                    footer={card.footer}
                    image={card.image}
                    imageSx={card.imageSx}
                  >
                    <Stack height={{ xs: undefined, md: card.contentHeight }}>
                      <CardContent title={card.contentTitle} content={card.content} />
                    </Stack>
                  </CustomCard>
                </Stack>
              }
            />
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header="card.card_alignment">
        <Stack p={1} flexWrap={'wrap'} gap={2} direction={'row'}>
          {cardAlignment.map((cardAlign) => (
            <CardContent
              key={cardAlign.id}
              title={cardAlign.title}
              content={
                <Stack width={{ xs: undefined, md: 400 }}>
                  <CustomCard
                    header={simpleCards[2].header}
                    footer={simpleCards[2].footer}
                    headerSx={{ textAlign: cardAlign.textAlign }}
                    footerSx={{ textAlign: cardAlign.textAlign }}
                    contentAlignment={cardAlign.alignment as AlignmentType}
                  >
                    <Stack height={simpleCards[2].contentHeight}>
                      <CardContent
                        title={simpleCards[2].contentTitle}
                        content={simpleCards[2].content}
                        alignItems={cardAlign.alignment as AlignmentType}
                        textAlign={cardAlign.textAlign as TextAlignType}
                      />
                    </Stack>
                  </CustomCard>
                </Stack>
              }
            />
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header="card.card_variants">
        <Stack p={1} flexWrap={'wrap'} gap={2} direction={'row'}>
          {cardVariants.map((cardVariant) => (
            <Stack width={{ xs: undefined, md: 400 }} key={cardVariant.id}>
              <CustomCard
                header={cardVariant.title}
                footer={simpleCards[2].footer}
                variant={cardVariant.variant as PaletteVariants}
              >
                <Stack height={200}>
                  <CardContent
                    title={simpleCards[2].contentTitle}
                    content={simpleCards[2].content}
                  />
                </Stack>
              </CustomCard>
            </Stack>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header="card.card_actions">
        <Stack p={1} flexWrap={'wrap'} gap={2} direction={'row'}>
          {cardsActions.map((card) => (
            <Stack width={{ xs: undefined, md: 400 }} key={card.id}>
              <CustomCard
                header={card.title}
                cardActions={card.cardActions}
                cardActionsPlacement={card.actionPlacement}
              >
                <Stack height={200}>
                  <CardContent
                    title={simpleCards[1].contentTitle}
                    content={simpleCards[1].content}
                  />
                </Stack>
              </CustomCard>
            </Stack>
          ))}
        </Stack>
      </CustomCard>
    </>
  );
}

export default CardsPage;
