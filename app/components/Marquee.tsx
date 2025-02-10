import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    "name": "Ana María López",
    "username": "@AnaMLopez", 
    "body": "¡Excelente servicio! Me ayudaron a encontrar el departamento ideal en Belgrano. Muy profesionales.",
    "img": "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Carlos Rodríguez",
    "username": "@CarlosRodriguezOK",
    "body": "Muy contento con Nova. Me asesoraron en la compra de mi casa y conseguí un excelente precio.",
    "img": "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Laura Pérez", 
    "username": "@LauraPerez",
    "body": "Encontré el local perfecto para mi negocio gracias a Nova. Excelente atención y servicio.",
    "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Juan Martínez",
    "username": "@JuanMartinez",
    "body": "Vendí mi propiedad en tiempo récord y a buen precio. Equipo muy profesional.",
    "img": "https://plus.unsplash.com/premium_photo-1689977830819-d00b3a9b7363?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Sofía González",
    "username": "@SofiaGonzalez",
    "body": "Me ayudaron con la financiación y encontré la casa perfecta. ¡Gracias Nova!",
    "img": "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Pedro Sánchez",
    "username": "@PedroSanchezOK",
    "body": "Encontramos la propiedad ideal para mi familia. Servicio personalizado y confiable.",
    "img": "https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="30" height="30" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <section>
        <h3 className="text-center text-2xl font-bold mb-12">Ellos ya nos eligieron, que esperas vos para ser parte?</h3>
    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review}/>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    </section>
  );
}
