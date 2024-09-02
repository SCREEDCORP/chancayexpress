import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

import { ROUTES } from "@/core/routes";
import {
	Paragraph,
	ParagraphContent,
	ParagraphTitle,
} from "../components/paragraph";

export default function Politicas() {
	return (
		<>
			<section className='relative table w-full bg-bottom  bg-no-repeat pb-16'>
				<div className='container'>
					<div className='mt-10 grid grid-cols-1 pb-8 text-center'>
						<h3 className='text-2xl font-medium leading-snug tracking-wide md:text-3xl md:leading-snug'>
							Terminos y condiciones de Chancay Express
						</h3>
					</div>
				</div>

				<div className='absolute bottom-5 end-0 start-0 z-10 mx-3 text-center'>
					<ul className='breadcrumb breadcrumb-light mb-0 inline-block tracking-[0.5px]'>
						<li className='inline text-[15px] font-semibold duration-500 ease-in-out'>
							<Link href={ROUTES.home} className='inline-flex items-center'>
								Chancay Express
								<ChevronRightIcon className='inline-block h-4 w-4' />
							</Link>
						</li>
						<li
							className='inline text-[15px] font-semibold duration-500 ease-in-out'
							aria-current='page'
						>
							Terminos y condiciones
						</li>
					</ul>
				</div>
			</section>
			<section className='relative py-16 md:py-24'>
				<div className='container'>
					<div className='justify-center md:flex'>
						<div className='md:w-3/4'>
							<div className='space-y-4 rounded-md bg-white p-6 shadow dark:bg-slate-900 dark:shadow-gray-800'>
								<Paragraph>
									<ParagraphTitle>Términos y condiciones:</ParagraphTitle>
									<ParagraphContent>
										Lea atentamente estos términos y condiciones antes de
										utilizar nuestro Servicio.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>
										Interpretación y definiciones:
									</ParagraphTitle>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Interpretación:</ParagraphTitle>
									<ParagraphContent>
										Las palabras cuya letra inicial está en mayúscula tienen
										significados definidos en las siguientes condiciones. Las
										siguientes definiciones tendrán el mismo significado
										independientemente de que aparezcan en singular o en plural.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Definiciones:</ParagraphTitle>
									<ParagraphContent>
										A los efectos de estos Términos y condiciones
									</ParagraphContent>
									<ParagraphContent>
										Afiliado significa una entidad que controla, está controlada
										por o está bajo control común con una parte, donde `control`
										significa propiedad del 50% o más de las acciones,
										participación patrimonial u otros valores con derecho a voto
										para la elección de directores u otra autoridad
										administrativa.
									</ParagraphContent>
									<ParagraphContent>País se refiere a: Perú</ParagraphContent>
									<ParagraphContent>
										Compañía (a la que se hace referencia como `la Compañía`,
										`Nosotros`, `Nos` o `Nuestro` en este Acuerdo) se refiere a
										chancay express.
									</ParagraphContent>
									<ParagraphContent>
										Dispositivo significa cualquier dispositivo que pueda
										acceder al Servicio, como una computadora, un teléfono
										celular o una tableta digital.
									</ParagraphContent>
									<ParagraphContent>
										Servicio se refiere al Sitio web.
									</ParagraphContent>
									<ParagraphContent>
										Términos y Condiciones (también denominados `Términos`)
										significa estos Términos y Condiciones que forman el acuerdo
										completo entre Usted y la Compañía con respecto al uso del
										Servicio. Este acuerdo de Términos y Condiciones se ha
										creado con la ayuda del Generador de Términos y Condiciones.
									</ParagraphContent>
									<ParagraphContent>
										Servicio de Redes Sociales de Terceros significa cualquier
										servicio o contenido (incluidos datos, información,
										productos o servicios) proporcionado por un tercero que
										puede mostrarse, incluirse o ponerse a disposición por el
										Servicio.
									</ParagraphContent>
									<ParagraphContent>
										Sitio web se refiere a chancay express, accesible desde
										www.chancayexpress.com
									</ParagraphContent>
									<ParagraphContent>
										Usted significa la persona que accede o utiliza el Servicio,
										o la empresa u otra entidad legal en nombre de la cual dicha
										persona accede o utiliza el Servicio, según corresponda.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Reconocimiento:</ParagraphTitle>
									<ParagraphContent>
										Estos son los Términos y Condiciones que rigen el uso de
										este Servicio y el acuerdo que opera entre Usted y la
										Compañía. Estos Términos y Condiciones establecen los
										derechos y obligaciones de todos los usuarios con respecto
										al uso del Servicio.
									</ParagraphContent>
									<ParagraphContent>
										Su acceso y uso del Servicio está condicionado a Su
										aceptación y cumplimiento de estos Términos y Condiciones.
										Estos Términos y Condiciones se aplican a todos los
										visitantes, usuarios y otras personas que accedan o utilicen
										el Servicio.
									</ParagraphContent>
									<ParagraphContent>
										Al acceder o utilizar el Servicio, acepta estar sujeto a
										estos Términos y Condiciones. Si no está de acuerdo con
										alguna parte de estos Términos y Condiciones, no podrá
										acceder al Servicio.
									</ParagraphContent>
									<ParagraphContent>
										Usted declara que es mayor de 18 años. La Compañía no
										permite que los menores de 18 años utilicen el Servicio.
									</ParagraphContent>
									<ParagraphContent>
										Su acceso y uso del Servicio también está condicionado a su
										aceptación y cumplimiento de la Política de privacidad de la
										Compañía. Nuestra Política de privacidad describe Nuestras
										políticas y procedimientos sobre la recopilación, el uso y
										la divulgación de Su información personal cuando utiliza la
										Aplicación o el Sitio web y le informa sobre Sus derechos de
										privacidad y cómo la ley lo protege. Lea atentamente Nuestra
										Política de privacidad antes de utilizar Nuestro Servicio.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Enlaces a otros sitios web:</ParagraphTitle>
									<ParagraphContent>
										Nuestro Servicio puede contener enlaces a sitios web o
										servicios de terceros que no son propiedad ni están
										controlados por la Compañía.
									</ParagraphContent>
									<ParagraphContent>
										La Compañía no tiene control ni asume ninguna
										responsabilidad por el contenido, las políticas de
										privacidad o las prácticas de sitios web o servicios de
										terceros. Además, reconoce y acepta que la Compañía no será
										responsable, directa o indirectamente, de ningún daño o
										pérdida causados o presuntamente causados por o en relación
										con el uso o la confianza en dicho contenido, bienes o
										servicios disponibles en o a través de dichos sitios web o
										servicios.
									</ParagraphContent>
									<ParagraphContent>
										Le recomendamos encarecidamente que lea los términos y
										condiciones y las políticas de privacidad de los sitios web
										o servicios de terceros que visite.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Terminación:</ParagraphTitle>
									<ParagraphContent>
										Podemos terminar o suspender su acceso de inmediato, sin
										previo aviso ni responsabilidad, por cualquier motivo,
										incluido, entre otros, si incumple estos Términos y
										condiciones.
									</ParagraphContent>
									<ParagraphContent>
										Tras la terminación, su derecho a usar el Servicio cesará de
										inmediato.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>
										Limitación de responsabilidad:
									</ParagraphTitle>
									<ParagraphContent>
										Sin perjuicio de los daños que pueda sufrir, la
										responsabilidad total de la Compañía y de cualquiera de sus
										proveedores en virtud de cualquier disposición de estos
										Términos y su recurso exclusivo por todo lo anterior se
										limitará al monto efectivamente pagado por Usted a través
										del Servicio o 100 USD si no ha comprado nada a través del
										Servicio.
									</ParagraphContent>
									<ParagraphContent>
										En la medida máxima permitida por la ley aplicable, en
										ningún caso la Compañía o sus proveedores serán responsables
										de ningún daño especial, incidental, indirecto o consecuente
										(incluidos, entre otros, daños por pérdida de ganancias,
										pérdida de datos u otra información, por interrupción de
										negocios, por lesiones personales, pérdida de privacidad que
										surja de o esté relacionada de alguna manera con el uso o la
										incapacidad de usar el Servicio, software de terceros y/o
										hardware de terceros utilizado con el Servicio, o de otro
										modo en relación con cualquier disposición de estos
										Términos), incluso si la Compañía o cualquier proveedor ha
										sido informado de la posibilidad de dichos daños e incluso
										si el recurso no cumple con su propósito esencial.
									</ParagraphContent>
									<ParagraphContent>
										Algunos estados no permiten la exclusión de garantías
										implícitas o la limitación de responsabilidad por daños
										incidentales o consecuentes, lo que significa que algunas de
										las limitaciones anteriores pueden no aplicarse. En estos
										estados, la responsabilidad de cada parte estará limitada en
										la mayor medida permitida por la ley.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>
										Descargo de responsabilidad `TAL CUAL` y `SEGÚN
										DISPONIBILIDAD`:
									</ParagraphTitle>
									<ParagraphContent>
										El Servicio se le proporciona `TAL CUAL` y `SEGÚN
										DISPONIBILIDAD` y con todos los defectos y fallas sin
										garantía de ningún tipo. En la medida máxima permitida por
										la ley aplicable, la Compañía, en su propio nombre y en
										nombre de sus Afiliados y sus respectivos licenciantes y
										proveedores de servicios, renuncia expresamente a todas las
										garantías, ya sean expresas, implícitas, legales o de otro
										tipo, con respecto al Servicio, incluidas todas las
										garantías implícitas de comerciabilidad, idoneidad para un
										propósito particular, título y no infracción, y las
										garantías que puedan surgir del curso de la negociación, el
										curso del desempeño, el uso o la práctica comercial. Sin
										limitar lo anterior, la Compañía no ofrece garantía ni
										compromiso alguno, y no hace ninguna manifestación de ningún
										tipo de que el Servicio cumplirá con sus requisitos, logrará
										los resultados previstos, será compatible o funcionará con
										cualquier otro software, aplicación, sistema o servicio,
										funcionará sin interrupciones, cumplirá con los estándares
										de rendimiento o confiabilidad o estará libre de errores o
										que cualquier error o defecto puede o será corregido.
									</ParagraphContent>
									<ParagraphContent>
										Sin limitar lo anterior, ni la Compañía ni ninguno de los
										proveedores de la compañía hace ninguna manifestación o
										garantía de ningún tipo, expresa o implícita: (i) en cuanto
										al funcionamiento o disponibilidad del Servicio, o la
										información, contenido y materiales o productos incluidos en
										el mismo; (ii) que el Servicio será ininterrumpido o libre
										de errores; (iii) en cuanto a la precisión, confiabilidad o
										actualidad de cualquier información o contenido
										proporcionado a través del Servicio; o (iv) que el Servicio,
										sus servidores, el contenido o los correos electrónicos
										enviados desde o en nombre de la Compañía están libres de
										virus, scripts, troyanos, gusanos, malware, bombas de tiempo
										u otros componentes dañinos.
									</ParagraphContent>
									<ParagraphContent>
										Algunas jurisdicciones no permiten la exclusión de ciertos
										tipos de garantías o limitaciones sobre los derechos legales
										aplicables de un consumidor, por lo que algunas o todas las
										exclusiones y limitaciones anteriores pueden no aplicarse en
										su caso. Pero en tal caso, las exclusiones y limitaciones
										establecidas en esta sección se aplicarán en la mayor medida
										posible según la ley aplicable.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Ley aplicable:</ParagraphTitle>
									<ParagraphContent>
										Las leyes del país, con exclusión de sus normas sobre
										conflictos de leyes, regirán estos Términos y su uso del
										Servicio. Su uso de la Aplicación también puede estar sujeto
										a otras leyes locales, estatales, nacionales o
										internacionales.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Resolución de disputas:</ParagraphTitle>
									<ParagraphContent>
										Si tiene alguna inquietud o disputa sobre el Servicio,
										acepta primero intentar resolver la disputa de manera
										informal comunicándose con la Compañía.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>
										Para usuarios de la Unión Europea (UE):
									</ParagraphTitle>
									<ParagraphContent>
										Si es un consumidor de la Unión Europea, se beneficiará de
										las disposiciones obligatorias de la ley del país en el que
										reside.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>
										Cumplimiento legal de los Estados Unidos:
									</ParagraphTitle>
									<ParagraphContent>
										Usted declara y garantiza que (i) no se encuentra en un país
										sujeto al embargo del gobierno de los Estados Unidos o que
										haya sido designado por el gobierno de los Estados Unidos
										como un país que `apoya el terrorismo` y (ii) no figura en
										ninguna lista del gobierno de los Estados Unidos de partes
										prohibidas o restringidas.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Divisibilidad y renuncia:</ParagraphTitle>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Divisibilidad:</ParagraphTitle>
									<ParagraphContent>
										Si alguna disposición de estos Términos se considera
										inaplicable o inválida, dicha disposición se modificará e
										interpretará para lograr los objetivos de dicha disposición
										en la mayor medida posible según la ley aplicable y las
										disposiciones restantes continuarán en plena vigencia y
										efecto.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Renuncia:</ParagraphTitle>
									<ParagraphContent>
										Salvo lo dispuesto en el presente documento, el hecho de no
										ejercer un derecho o de no exigir el cumplimiento de una
										obligación en virtud de estos Términos no afectará la
										capacidad de una parte de ejercer dicho derecho o exigir
										dicho cumplimiento en cualquier momento posterior, ni la
										renuncia a un incumplimiento constituirá una renuncia a
										cualquier incumplimiento posterior.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>
										Interpretación de la traducción:
									</ParagraphTitle>
									<ParagraphContent>
										Estos Términos y condiciones pueden haberse traducido si los
										hemos puesto a su disposición en nuestro Servicio. Usted
										acepta que el texto original en inglés prevalecerá en caso
										de disputa.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>
										Cambios a estos Términos y Condiciones:
									</ParagraphTitle>
									<ParagraphContent>
										Nos reservamos el derecho, a nuestra exclusiva discreción,
										de modificar o reemplazar estos Términos en cualquier
										momento. Si una revisión es sustancial, haremos todos los
										esfuerzos razonables para proporcionar un aviso con al menos
										30 días de anticipación antes de que entren en vigencia los
										nuevos términos. Lo que constituye un cambio sustancial se
										determinará a nuestra exclusiva discreción.
									</ParagraphContent>
									<ParagraphContent>
										Si continúa accediendo o utilizando Nuestro Servicio después
										de que dichas revisiones entren en vigencia, usted acepta
										estar sujeto a los términos revisados. Si no acepta los
										nuevos términos, en su totalidad o en parte, deje de usar el
										sitio web y el Servicio.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Contáctenos:</ParagraphTitle>
									<ParagraphContent>
										Si tiene alguna pregunta sobre estos Términos y Condiciones,
										puede comunicarse con nosotros:
									</ParagraphContent>
									<ParagraphContent>
										Por correo electrónico: team@chancayexpress.com
									</ParagraphContent>
								</Paragraph>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
