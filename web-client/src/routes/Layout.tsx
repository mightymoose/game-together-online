import { HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { HoverCard } from '@radix-ui/react-hover-card';
import { Joystick, RadioTower } from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className="flex h-10 items-center gap-4 bg-background px-4 md:px-6 flex justify-between">
                <Link to="/" className="flex items-center">
                    <Joystick className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium leading-none">Game Together Online</span>
                </Link>

                <HoverCard>
                    <HoverCardTrigger>
                        <RadioTower className="h-4 w-4 text-green-500" />
                    </HoverCardTrigger>
                    <HoverCardContent className="m-2 flex flex-col items-center">
                        <h4 className='mb-2'>Connected</h4>
                        <dl className="flex space-x-10">
                            <div>
                                <dt className="text-sm font-medium leading-6 text-gray-500">
                                    Ping
                                </dt>
                                <dd className="w-full flex-none text-xl font-medium leading-10 tracking-tight text-gray-900">123 ms</dd>

                            </div>
                            <div>
                                <dt className="text-sm font-medium leading-6 text-gray-500">
                                    Server
                                </dt>
                                <dd className="w-full flex-none text-xl font-medium leading-10 tracking-tight text-gray-900">12 ms</dd>
                            </div>
                        </dl>
                    </HoverCardContent>
                </HoverCard>
            </header>
            <div className="pt-2">
                <Outlet />
            </div>
        </div>
    );
}