<?php

namespace App\Repository;

use App\Entity\Card;
use Doctrine\Persistence\ManagerRegistry;
use ShadowC\AdminBundle\Repository\BaseCRUDRepository;

/**
 * @extends BaseCRUDRepository<Card>
 */
class CardRepository extends BaseCRUDRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Card::class);
    }
}
