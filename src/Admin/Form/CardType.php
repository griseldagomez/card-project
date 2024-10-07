<?php

namespace App\Admin\Form;

use App\Entity\Card;
use ShadowC\AdminBundle\Form\BaseCRUDType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CardType extends BaseCRUDType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('colorScheme', ChoiceType::class, [
                'label' => 'form.colorScheme.label',
                'required' => true,
                'choices' => [
                    'Color 1' => 'color1',
                    'Color 2' => 'color2',
                    'Color 3' => 'color3',
                ],
            ])
            ->add('name', TextType::class, [
                'label' => 'form.name.label',
                'required' => true,
            ])
            ->add('job', TextType::class, [
                'label' => 'form.job.label',
                'required' => true,
            ])
            ->add('email', TextType::class, [
                'label' => 'form.email.label',
                'required' => true,
            ])
            ->add('phone', TextType::class, [
                'label' => 'form.phone.label',
                'required' => true,
            ])
            ->add('linkedinUrl', TextType::class, [
                'label' => 'form.linkedinUrl.label',
                'required' => true,
            ])
            ->add('githubUrl', TextType::class, [
                'label' => 'form.githubUrl.label',
                'required' => true,
            ])
            ->add('photo', TextareaType::class, [
                'label' => 'form.photo.label',
                'required' => true,
            ])
        ;

        $this->addButtons($builder, BaseCRUDType::AVAILABLE_BUTTONS);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Card::class,
            'allow_extra_fields' => true,
        ]);
    }

    public function getParent(): string
    {
        return BaseCRUDType::class;
    }
}
