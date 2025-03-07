export default function Scrolis(){
    return (
        <div className="fixed bottom-5 right-5 flex flex-col items-center z-10">
            <div className="flex gap-2 items-center">
                <div className="text-xl">Úvod</div>
            </div>
            <div className="h-5 w-0.5 bg-neutral-300 rounded-full "></div>
            <div className="flex gap-2 items-center group/sekce cursor-pointer">
                <div className="text-xl text-neutral-300 group-hover/sekce:text-black transition">Aktivitový dotazník</div>
            </div>
            <div className="h-5 w-0.5 bg-neutral-300 rounded-full "></div>
            <div className="flex gap-2 items-center group/sekce cursor-pointer">
                <div className="text-xl text-neutral-300 group-hover/sekce:text-black transition">Novinky</div>
            </div>
            <div className="h-5 w-0.5 bg-neutral-300 rounded-full "></div>
            <div className="flex gap-2 items-center group/sekce cursor-pointer">
                <div className="text-xl text-neutral-300 group-hover/sekce:text-black transition">Kdo má svátek</div>
            </div>
            <div className="h-5 w-0.5 bg-neutral-300 rounded-full "></div>
            <div className="flex gap-2 items-center group/sekce cursor-pointer">
                <div className="text-xl text-neutral-300 group-hover/sekce:text-black transition">Co podniknout</div>
            </div>
        </div>
    );
}