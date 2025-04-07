"use client";
import Link from "next/link";
import FormField from "../components/FormField";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function FormularioPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ELEUTHERIA 2025
          </h1>
          <p className="text-lg font-semibold text-gray-700">
            “Eis a vontade de Deus: A vossa Santificação”
          </p>
          <p className="text-gray-600 italic">I Tessalonicenses 4, 3</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-8 space-y-2">
          <p>
            <strong>Data:</strong> 20, 21 e 22 de Junho/2025
          </p>
          <p>
            <strong>Música Tema:</strong> Eis-me aqui– Colo de Deus
          </p>
          <p>
            <strong>Local:</strong> Centro de Formação Religioso – Luiza G.
            Freguglia
          </p>
          <p>
            <strong>Cidade:</strong> Santa Bárbara d’Oeste
          </p>
          <p>
            <strong>Saída:</strong> 20/06/2025 às 19h00 - Paróquia Santa Luzia
          </p>
          <p>
            <strong>Retorno:</strong> 22/06/2025 às 17h30, saída de Santa
            Bárbara d’Oeste
          </p>
          <p>
            <strong>Faixa etária:</strong> 14 a 30 anos
          </p>
          <p>
            <strong>Valor:</strong> 1º Lote até 15/05, R$ 100
          </p>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          Preencha o formulário abaixo
        </h2>

        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSde4P_3rOrXZembrQToUQKjCPJH8TDyGiC6sI1U9ln8A_pYug/formResponse"
          method="POST"
          target="_blank"
          className="space-y-6"
        >
          {/* Campo Nome Completo */}
          <FormField
            label="Deus te chama pelo nome, qual é o seu? (Nome completo):"
            type="text"
            id="nome_completo"
            name="entry."
            required
          />

          {/* Campo RG */}
          <FormField
            label="RG:"
            type="number"
            id="rg"
            name="entry."
            required
            inputMode="numeric"
            pattern="[0-9.-]*"
            placeholder="Ex: 12345678-9"
          />

          {/* Campo Data de Nascimento */}
          <FormField
            label="Data de Nascimento:"
            type="date"
            id="data_nascimento"
            name="entry."
            required
          />

          {/* Campo Sexo */}
          <FormField
            label="Sexo:"
            as="radio"
            id="sexo"
            name="entry."
            required
            options={[
              { value: "Masculino", label: "Solteiro" },
              { value: "Feminino", label: "Casado" },
            ]}
          />

          {/* Campo WhatsApp */}
          <FormField
            label="WhatsApp:"
            as="input"
            type="text"
            id="whatsapp"
            name="entry."
            required
            inputMode="numeric"
            pattern="^[-() 0-9]+$"
            placeholder="Ex: (19) 99999-9999"
          />

          {/* WhatsApp Responsavel*/}
          <FormField
            label="WhatsApp de um responsável:"
            as="input"
            type="text"
            id="whatsapp_responsavel"
            name="entry."
            required
            inputMode="numeric"
            pattern="^[-() 0-9]+$"
            placeholder="Ex: (19) 99999-9999"
          />

          {/* Endereço completo */}
          <FormField
            label="Endereço completo:"
            type="text"
            id="endereco"
            name="entry."
            required
          />

          {/* Religião */}
          <FormField
            label="Religião (se tiver): "
            type="text"
            id="religiao"
            name="entry."
            required
          />

          {/* Sacamentos */}
          <FormField
            label="Quais Sacramentos possui?:"
            as="checkbox"
            id="sacramentos"
            name="entry."
            required
            options={[
              { value: "Batismo", label: "Batismo" },
              { value: "1° Eucaristia", label: "1° Eucaristia" },
              { value: "Crisma", label: "Crisma" },
              { value: "Matrimônio", label: "Matrimônio" },
              { value: "Nenhum", label: "Nenhum" },
            ]}
          />

          {/* Religião */}
          <FormField
            label="Paróquia/Comunidade:"
            type="text"
            id="paroquia"
            name="entry."
            required
          />

          {/* Estado Civil */}
          <FormField
            label="Estado Civil:"
            as="select"
            id="estado_civil"
            name="entry."
            required
            options={[
              { value: "Solteiro", label: "Solteiro" },
              { value: "Casado", label: "Casado" },
              { value: "Divorciado", label: "Divorciado" },
              { value: "Viuvo", label: "Viuvo" },
              { value: "Amasiado", label: "Amasiado" },
            ]}
          />

          {/* Doenca Cronica */}
          <FormField
            label="Possui alguma doença crônica?"
            type="text"
            id="doenca_cronica"
            name="entry."
            required
          />

          {/* Alergia */}
          <FormField
            label="Possui alguma alergia?"
            type="text"
            id="alergia"
            name="entry."
            required
          />

          {/* Medicamento Controlado */}
          <FormField
            label="Faz uso de medicamento controlado?"
            type="text"
            id="medicamento_controlado"
            name="entry."
            required
          />

          {/* Analgesico */}
          <FormField
            label="Pode tomar analgésico?"
            as="radio"
            id="analgesico"
            name="entry."
            required
            options={[
              { value: "Sim", label: "Sim" },
              { value: "Nao", label: "Não" },
            ]}
          />

          {/* Outras Restrições */}
          <FormField
            label="Outras restrições:"
            type="text"
            id="outras_restricoes"
            name="entry."
            required
          />

          {/* Contato de Emergência */}
          <FormField
            label="Contato de emergência:"
            type="text"
            id="contato_emergencia"
            name="entry."
            required
          />

          {/* Como conheceu o Eleutheria? */}
          <FormField
            label="Como conheceu o Eleutheria?"
            as="select"
            id="como_conheceu"
            name="entry."
            required
            options={[
              { value: "Instagram", label: "Instagram" },
              { value: "Convite de Amigos", label: "Convite de Amigos" },
              { value: "Convite dos Pais", label: "Convite dos Pais" },
              { value: "Aviso na Missa", label: "Aviso na Missa" },
              { value: "Outro", label: "Outro" },
            ]}
          />

          {/* Autoriza o uso de imagem */}
          <FormField
            label="Autoriza o uso de imagem?"
            as="radio"
            id="uso_imagem"
            name="entry."
            required
            options={[
              { value: "Sim", label: "Sim" },
              { value: "Nao", label: "Não" },
            ]}
          />

          {/* Botão de Envio */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Enviar
          </button>
        </form>

        <div className="mt-6 items-center justify-center">
          <Link
            href="/"
            className="flex flex-wrap gap-4 items-center justify-center text-blue-600 hover:text-blue-500 text-md"
          >
            <FaArrowAltCircleLeft />
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
