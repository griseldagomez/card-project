<?php

namespace App\Admin\Controller;

use App\Admin\Form\CardType;
use App\Entity\Card;
use ShadowC\AdminBundle\Attribute\CRUDController;
use ShadowC\AdminBundle\Controller\AbstractCRUDController;
use ShadowC\AdminBundle\Library\Controller\ControllerTemplateStyles;
use Symfony\Component\Routing\Attribute\Route;

#[CRUDController(
    entityClass: Card::class,
    resourceName: 'card',
    resourceNamePlural: 'cards',
    formTypeClass: CardType::class,
    translatorPrefix: 'cms_card',
    formStyle: ControllerTemplateStyles::FORM_STYLE_SHORT,
)]
#[Route(path: '/cards', name: 'sc_admin_card_', schemes: '%scheme%')]
class CardController extends AbstractCRUDController
{
}
