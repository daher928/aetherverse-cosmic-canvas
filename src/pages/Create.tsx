
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const MAX_FILES = 3;
const formSchema = z.object({
  theme: z
    .string()
    .min(2, "Theme must be at least 2 characters.")
    .max(50, "Theme must be at most 50 characters."),
  projects: z
    .any()
    .refine((files) => files?.length > 0, "At least one project file is required.")
    .refine(
      (files) => files?.length <= MAX_FILES,
      `You can upload a maximum of ${MAX_FILES} files.`
    ),
});

const Create = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      theme: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Cosmos generation started! This may take a moment.");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent text-white">
      <div className="absolute inset-0 -z-10 h-full w-full bg-space-dark bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <Card className="w-full max-w-2xl bg-black/50 backdrop-blur-lg border-neon-blue/50 animate-fade-in">
        <CardHeader>
          <CardTitle
            className="text-3xl font-orbitron text-center text-neon-pink"
            style={{ textShadow: "0 0 10px #f0f" }}
          >
            Create Your Cosmos
          </CardTitle>
          <CardDescription className="text-center text-gray-400 font-orbitron pt-2">
            Define the theme and upload your creative projects to generate an
            interactive 3D universe.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neon-blue">
                      Cosmos Theme
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., 'Cyberpunk Developer Portfolio'"
                        className="bg-transparent border-neon-blue/50 focus:ring-neon-pink"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projects"
                render={({ field: { onChange, onBlur, name, ref } }) => (
                  <FormItem>
                    <FormLabel className="text-neon-blue">
                      Upload Projects (up to 3)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        multiple
                        className="bg-transparent border-neon-blue/50 file:text-neon-pink file:bg-transparent file:border-0 hover:file:bg-neon-blue/10"
                        onChange={(e) => onChange(e.target.files)}
                        onBlur={onBlur}
                        name={name}
                        ref={ref}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full holographic-button group" type="submit">
                <span className="holographic-button-inner font-orbitron">
                  Generate Cosmos
                </span>
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default Create;
