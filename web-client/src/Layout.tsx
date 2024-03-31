import { Joystick } from 'lucide-react';

export const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className="flex h-10 items-center gap-4 bg-background px-4 md:px-6 flex justify-between">
                <a href="#" className="flex items-center">
                    <Joystick className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium leading-none">Game Together Online</span>
                </a>
            </header>
            <div className="pt-2">
                {children}
            </div>
        </div>
    );
}