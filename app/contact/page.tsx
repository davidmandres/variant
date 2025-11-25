import { Send, Mail, MessageSquare, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 font-headline">Get in touch.</h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            We read every email. Whether you have a question about a model, a
            billing inquiry, or just want to say hello.
          </p>
        </div>

        <Card className="p-8">
          <form
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="General Inquiry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Support / Billing</SelectItem>
                  <SelectItem value="research">Research Question</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea
                className="h-32"
                placeholder="How can we help?"
              ></Textarea>
            </div>

            <Button type="submit" className="w-full" size="lg">
              <Send className="w-4 h-4" /> Send Message
            </Button>
          </form>
        </Card>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <Mail className="w-6 h-6 mb-4 text-foreground" />
              <h3 className="font-bold mb-2 text-foreground">Direct Email</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Prefer to use your own client?
              </p>
              <a href="mailto:hello@variant.com" className="text-primary font-medium underline">
                hello@variant.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <MessageSquare className="w-6 h-6 mb-4 text-foreground" />
              <h3 className="font-bold mb-2 text-foreground">Community</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Join the conversation on Discord.
              </p>
              <button className="text-primary font-medium underline">
                Join Server
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
