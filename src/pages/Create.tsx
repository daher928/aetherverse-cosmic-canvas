
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Create = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent text-white">
      <div className="absolute inset-0 -z-10 h-full w-full bg-space-dark bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <Card className="w-full max-w-2xl bg-black/50 backdrop-blur-lg border-neon-blue/50 animate-fade-in">
        <CardHeader>
          <CardTitle className="text-3xl font-orbitron text-center text-neon-pink" style={{ textShadow: '0 0 10px #f0f' }}>
            Create Your Cosmos
          </CardTitle>
          <CardDescription className="text-center text-gray-400 font-orbitron pt-2">
            Define the theme and upload your creative projects to generate an interactive 3D universe.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="theme" className="text-neon-blue">Cosmos Theme</Label>
            <Input id="theme" placeholder="e.g., 'Cyberpunk Developer Portfolio'" className="bg-transparent border-neon-blue/50 focus:ring-neon-pink" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="projects" className="text-neon-blue">Upload Projects (up to 3)</Label>
            <Input id="projects" type="file" multiple className="bg-transparent border-neon-blue/50 file:text-neon-pink file:bg-transparent file:border-0 hover:file:bg-neon-blue/10" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full holographic-button group" type="submit">
            <span className="holographic-button-inner font-orbitron">
              Generate Cosmos
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Create;
