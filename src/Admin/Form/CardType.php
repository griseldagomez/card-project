<?php

namespace App\Admin\Form;

use App\Entity\Card;
use ShadowC\AdminBundle\Form\BaseCRUDType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CardType extends BaseCRUDType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'form.title.label',
                'required' => true,
            ])
            ->add('text', TextareaType::class, [
                'label' => 'form.text.label',
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
