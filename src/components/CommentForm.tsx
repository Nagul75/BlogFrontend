import {
  Item,
  ItemTitle,
  ItemDescription,
  ItemContent,
  ItemActions,
} from "./ui/item";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Field, FieldLabel, FieldGroup, FieldError } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import apiClient from "@/utils/apiClient";
import axios from "axios";

import { commentSchema, type commentForm } from "@/types/CommentTypes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const CommentForm = ({ slug }: { slug: string }) => {
  const form = useForm<commentForm>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      authorName: "",
      content: "",
    },
  });

  const {
    register,
    formState: { errors },
  } = form;

  const onSubmit = async (data: commentForm) => {
    try {
      const response = await apiClient.post(`/posts/${slug}/comments/`, data);
      if (response.status == 201) {
        window.location.reload();
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.message);
      }
    }
  };

  return (
    <>
      <Item className="bg-neutral-200 dark:bg-neutral-800" variant="muted">
        <ItemContent>
          <ItemTitle>Add a comment</ItemTitle>
          <ItemDescription>
            Join in the fun! Engage with the community!
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-neutral-100 dark:bg-[hsl(0_0%_12%)] dark:border-none hover:cursor-pointer shadow-md"
              >
                Create
              </Button>
            </DialogTrigger>
            <DialogContent>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <DialogHeader>
                  <DialogTitle>Post Comment</DialogTitle>
                  <DialogDescription>
                    Author name is required! Keep it PG please!
                  </DialogDescription>
                </DialogHeader>
                <FieldGroup className="@container/field-group flex flex-col gap-6">
                  <Field orientation="vertical">
                    <FieldLabel htmlFor="authorName">Name</FieldLabel>
                    <Input
                      id="name"
                      placeholder="John"
                      {...register("authorName")}
                    />
                    <FieldError errors={[errors.authorName]} />
                  </Field>
                  <Field orientation="vertical">
                    <FieldLabel htmlFor="content">Comment</FieldLabel>
                    <Textarea
                      id="content"
                      placeholder="Hello, world!"
                      required
                      className="min-h-[100px] resize-none sm:min-w-[300px]"
                      {...register("content")}
                    />
                    <FieldError errors={[errors.content]} />
                  </Field>
                </FieldGroup>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      variant="outline"
                      className="hover:dark:bg-red-500 hover:dark:text-neutral-200"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    className="hover:dark:bg-[#6E533B] hover:dark:text-neutral-200"
                  >
                    Post
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </ItemActions>
      </Item>
    </>
  );
};

export default CommentForm;
