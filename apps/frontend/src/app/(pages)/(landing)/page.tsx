'use client'

import NossosClientes from '@/components/client/NossosClientes'
import TituloSlogan from '@/components/landing/TituloSlogan'
import NossosProfissionais from '@/components/barber/NossosProfissionais'
import NossosServicos from '@/components/service/NossosServicos'
import ContainerComBackground from '@/components/shared/ContainerComBackground'

export default function Landing() {
    return (
        <div>
            <TituloSlogan />
            <ContainerComBackground imagem="/banners/servicos.webp">
                <NossosServicos />
            </ContainerComBackground>
            <ContainerComBackground imagem="/banners/profissionais.webp">
                <NossosProfissionais />
            </ContainerComBackground>
            <ContainerComBackground imagem="/banners/clientes.webp">
                <NossosClientes />
            </ContainerComBackground>
        </div>
    )
}
