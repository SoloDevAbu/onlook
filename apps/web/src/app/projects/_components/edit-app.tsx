import { Routes } from '@/utils/constants';
import type { Project } from '@onlook/models/projects';
import { Button } from '@onlook/ui-v4/button';
import { Icons } from '@onlook/ui-v4/icons';
import { observer } from 'mobx-react-lite';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { redirect } from 'next/navigation';
import type { ComponentProps } from 'react';

const ButtonMotion = motion.create(Button);

interface EditAppButtonProps extends ComponentProps<typeof ButtonMotion> {
    project: Project;
}

export const EditAppButton = observer(({ project, ...props }: EditAppButtonProps) => {
    const t = useTranslations();

    const selectProject = (project: Project) => {
        redirect(`${Routes.PROJECT}/${project.id}`);
        // sendAnalytics('open project', { id: project.id, url: project.url });
    };

    return (
        <ButtonMotion
            size="default"
            variant={'outline'}
            className="gap-2 bg-background-active border-[0.5px] border-border-active w-full lg:w-auto"
            onClick={() => selectProject(project)}
            {...props}
        >
            <Icons.PencilPaper />
            <p>{t('projects.actions.editApp')}</p>
        </ButtonMotion>
    );
});
