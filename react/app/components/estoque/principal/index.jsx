import React from 'react'
import { Panel, PanelContainer, HeaderLine, TextBodyLine, PanelContent } from '../../template/Panel'
import { Page, PageHeader, PageContent, PageContainer } from '../../template/Page'

export default (props) => (
    <Page size="11">
        <PageHeader icon="fa fa-archive" title="Estoque" description="Informações sobre o estoque" />
        <PageContent>
            <PageContainer size="5">
                <Panel icon="fa fa-archive" title="Estoque até o momento">
                    <PanelContent>
                        <PanelContainer size="7">
                            <HeaderLine icon="fa fa-shopping-basket" description="Produtos cadastrados:" />
                            <HeaderLine icon="fa fa-industry" description="Marcas cadastradas:" />
                            <HeaderLine icon="fa fa-money" description="Valor do estoque:" />
                            <hr />
                            <HeaderLine icon="fa fa-tasks" description="Produtos sem estoque:" />
                            <HeaderLine icon="fa fa-tasks" description="Marcas sem produtos:" />
                        </PanelContainer>
                        <PanelContainer size="5">
                            <TextBodyLine description="50000" smallDescription="itens" />
                            <TextBodyLine description="50" smallDescription="itens" />
                            <TextBodyLine description="R$10.000,00" />
                            <hr />
                            <TextBodyLine description="10" smallDescription="produtos" />
                            <TextBodyLine description="10" smallDescription="marcas" />
                        </PanelContainer>
                    </PanelContent>
                </Panel>
            </PageContainer>
            <PageContainer size="4">
                <Panel icon="glyphicon glyphicon-tags" title="Vendas até o momento">
                    <PanelContent>
                        <PanelContainer size="7">
                            <HeaderLine icon="glyphicon glyphicon-shopping-cart" description="Total de produtos:" />
                            <HeaderLine icon="fa fa-money" description="Valor total:" />
                            <HeaderLine icon="fa fa-money" description="Lucro total:" />
                            <hr />
                            <HeaderLine icon="fa fa-shopping-basket" description="Vendas de fidelidade:" />
                        </PanelContainer>
                        <PanelContainer size="5">
                            <TextBodyLine description="50" smallDescription="itens" />
                            <TextBodyLine description="R$50.000,00" />
                            <TextBodyLine description="R$10.000,00" />
                            <hr />
                            <TextBodyLine description="50" smallDescription="produtos" />
                        </PanelContainer>
                    </PanelContent>
                </Panel>
            </PageContainer>
        </PageContent>
    </Page>
);