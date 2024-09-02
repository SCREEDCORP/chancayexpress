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
							Politicas de Chancay Express
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
							Politicas
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
									<ParagraphTitle>Política de privacidad:</ParagraphTitle>
									<ParagraphContent>
										El presente Política de Privacidad establece los términos en
										que Chancay-Express usa y protege la información que es
										proporcionada por sus usuarios al momento de utilizar su
										sitio web. Esta compañía está comprometida con la seguridad
										de los datos de sus usuarios. Cuando le pedimos llenar los
										campos de información personal con la cual usted pueda ser
										identificado, lo hacemos asegurando que sólo se empleará de
										acuerdo con los términos de este documento. Sin embargo esta
										Política de Privacidad puede cambiar con el tiempo o ser
										actualizada por lo que le recomendamos y enfatizamos revisar
										continuamente esta página para asegurarse que está de
										acuerdo con dichos cambios.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Información que es recogida:</ParagraphTitle>
									<ParagraphContent>
										Nuestro sitio web podrá recoger información personal por
										ejemplo: Nombre, información de contacto como su dirección
										de correo electrónica e información demográfica. Así mismo
										cuando sea necesario podrá ser requerida información
										específica para procesar algún pedido o realizar una entrega
										o facturación.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>
										Uso de la información recogida:
									</ParagraphTitle>
									<ParagraphContent>
										Nuestro sitio web emplea la información con el fin de
										proporcionar el mejor servicio posible, particularmente para
										mantener un registro de usuarios, de pedidos en caso que
										aplique, y mejorar nuestros productos y servicios. Es
										posible que sean enviados correos electrónicos
										periódicamente a través de nuestro sitio con ofertas
										especiales, nuevos productos y otra información publicitaria
										que consideremos relevante para usted o que pueda brindarle
										algún beneficio, estos correos electrónicos serán enviados a
										la dirección que usted proporcione y podrán ser cancelados
										en cualquier momento.
									</ParagraphContent>
									<ParagraphContent>
										Chancay-Express está altamente comprometido para cumplir con
										el compromiso de mantener su información segura. Usamos los
										sistemas más avanzados y los actualizamos constantemente
										para asegurarnos que no exista ningún acceso no autorizado.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Cookies:</ParagraphTitle>
									<ParagraphContent>
										Una cookie se refiere a un fichero que es enviado con la
										finalidad de solicitar permiso para almacenarse en su
										ordenador, al aceptar dicho fichero se crea y la cookie
										sirve entonces para tener información respecto al tráfico
										web, y también facilita las futuras visitas a una web
										recurrente. Otra función que tienen las cookies es que con
										ellas las web pueden reconocerte individualmente y por tanto
										brindarte el mejor servicio personalizado de su web.
									</ParagraphContent>
									<ParagraphContent>
										Nuestro sitio web emplea las cookies para poder identificar
										las páginas que son visitadas y su frecuencia. Esta
										información es empleada únicamente para análisis estadístico
										y después la información se elimina de forma permanente.
										Usted puede eliminar las cookies en cualquier momento desde
										su ordenador. Sin embargo las cookies ayudan a proporcionar
										un mejor servicio de los sitios web, estás no dan acceso a
										información de su ordenador ni de usted, a menos de que
										usted así lo quiera y la proporcione directamente noticias.
										Usted puede aceptar o negar el uso de cookies, sin embargo
										la mayoría de navegadores aceptan cookies automáticamente
										pues sirve para tener un mejor servicio web. También usted
										puede cambiar la configuración de su ordenador para declinar
										las cookies. Si se declinan es posible que no pueda utilizar
										algunos de nuestros servicios.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>Enlaces a terceros:</ParagraphTitle>
									<ParagraphContent>
										Este sitio web pudiera contener en laces a otros sitios que
										pudieran ser de su interés. Una vez que usted de clic en
										estos enlaces y abandone nuestra página, ya no tenemos
										control sobre al sitio al que es redirigido y por lo tanto
										no somos responsables de los términos o privacidad ni de la
										protección de sus datos en esos otros sitios terceros.
										Dichos sitios están sujetos a sus propias políticas de
										privacidad por lo cual es recomendable que los consulte para
										confirmar que usted está de acuerdo con estas.
									</ParagraphContent>
								</Paragraph>

								<Paragraph>
									<ParagraphTitle>
										Control de su información personal:
									</ParagraphTitle>
									<ParagraphContent>
										En cualquier momento usted puede restringir la recopilación
										o el uso de la información personal que es proporcionada a
										nuestro sitio web. Cada vez que se le solicite rellenar un
										formulario, como el de alta de usuario, puede marcar o
										desmarcar la opción de recibir información por correo
										electrónico. En caso de que haya marcado la opción de
										recibir nuestro boletín o publicidad usted puede cancelarla
										en cualquier momento.
									</ParagraphContent>
									<ParagraphContent>
										Esta compañía no venderá, cederá ni distribuirá la
										información personal que es recopilada sin su
										consentimiento, salvo que sea requerido por un juez con un
										orden judicial.
									</ParagraphContent>
									<ParagraphContent>
										Chancay-Express se reserva el derecho de cambiar los
										términos de la presente Política de Privacidad en cualquier
										momento.
									</ParagraphContent>
								</Paragraph>

								{/* <h5 className='mt-8 text-xl font-semibold'>
									Users Question & Answer :
								</h5> */}

								{/* <div
									id='accordion-collapse'
									data-accordion='collapse'
									className='mt-6'
								>
									{accordionData.map((item, index) => (
										<div
											key={index}
											className='relative mt-4 overflow-hidden rounded-md shadow dark:shadow-gray-800'
										>
											<h2
												className='text-base font-semibold'
												id='accordion-collapse-heading-1'
											>
												<button
													onClick={() => toggleAccordion(index)}
													type='button'
													className={`flex w-full items-center justify-between p-5 text-start font-semibold ${activeIndex === index ? "bg-gray-50 text-violet-600 dark:bg-slate-800" : ""}`}
													data-accordion-target='#accordion-collapse-body-1'
													aria-expanded='true'
													aria-controls='accordion-collapse-body-1'
												>
													<span>{item.title}</span>
													<svg
														data-accordion-icon
														className='h-4 w-4 shrink-0 rotate-180'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															fillRule='evenodd'
															d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
															clipRule='evenodd'
														></path>
													</svg>
												</button>
											</h2>
											{activeIndex === index && (
												<div
													id='accordion-collapse-body-1'
													aria-labelledby='accordion-collapse-heading-1'
												>
													<div className='p-5'>
														<p className='text-slate-400 dark:text-gray-400'>
															{item.content}
														</p>
													</div>
												</div>
											)}
										</div>
									))}
								</div> */}

								{/* <div className='mt-6'>
									<Link
										href='/'
										className='btn rounded-full border-violet-600 bg-violet-600 text-white hover:border-violet-700 hover:bg-violet-700'
									>
										Accept
									</Link>
									<Link
										href='/'
										className='btn ms-2 rounded-full border-violet-600 bg-transparent text-violet-600 hover:bg-violet-600 hover:text-white'
									>
										Decline
									</Link>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
